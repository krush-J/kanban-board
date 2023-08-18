import {
  ACTION_FETCH_API,
  ACTION_GROUPING,
  ACTION_SORTING,
} from "./ActionTypes";

const initial = {
  tickets: null,
  users: null,
  grouping: "Status",
  sorting: "Priority",
  groupedByStatus: null,
  groupedByUser: null,
  groupedByPriority: null,
  current: null,
};

export const Reducer = (state = initial, { type, payload }) => {
  const getUserById = (id) => {
    const user = state.users.find((user) => user.id === id);
    return user || null; // Return the found user or null if not found
  };

  switch (type) {
    case ACTION_FETCH_API:
      const { tickets, users } = payload;
      return {
        ...state,
        grouping: "Status",
        sorting: "Title",
        users,
        tickets,
      };

    case ACTION_GROUPING:
      switch (payload.type) {
        // grouping according to status
        case "Status":
          const groupedByStatus = state.groupedByStatus
            ? state.groupedByStatus
            : state.tickets.reduce((result, ticket) => {
                const { status } = ticket;
                const { name, available } = getUserById(ticket.userId);
                (result[status] ??= []).push({
                  ...ticket,
                  user: getUserById(ticket.userId),
                  userName: name,
                  userAvailable: available,
                });
                return result;
              }, {});

          for (const property of [
            "In progress",
            "Cancelled",
            "Backlog",
            "Done",
            "Todo",
          ]) {
            if (groupedByStatus !== null && !(property in groupedByStatus)) {
              groupedByStatus[property] = [];
            }
          }

          return {
            ...state,
            grouping: payload.type,
            groupedByStatus,
            current: groupedByStatus,
          };

        // grouping according to priority
        case "Priority":
          const groupedByPriority = state.groupedByPriority
            ? state.groupedByPriority
            : state.tickets.reduce((result, ticket) => {
                const { priority } = ticket;
                const { name, available } = getUserById(ticket.userId);
                (result[priority] ??= []).push({
                  ...ticket,
                  userName: name,
                  userAvailable: available,
                });
                return result;
              }, {});
          return {
            ...state,
            grouping: payload.type,
            groupedByPriority,
            current: groupedByPriority,
          };

        // grouping according to user
        default:
          const groupedByUser = state.groupedByUser
            ? state.groupedByUser
            : state.tickets.reduce((result, ticket) => {
                const { userId } = ticket;
                const { name, available } = getUserById(userId);
                (result[userId] ??= []).push({
                  ...ticket,
                  userName: name,
                  userAvailable: available,
                });
                return result;
              }, {});
          return {
            ...state,
            grouping: payload.type,
            groupedByUser,
            current: groupedByUser,
          };
      }

    // implementing sorting techniques
    case ACTION_SORTING:
      switch (payload.order) {
        case "Priority":
          return {
            ...state,
            sorting: "Priority",
          };
        default:
          return {
            ...state,
            sorting: "Title",
          };
      }

    default:
      return state;
  }
};
