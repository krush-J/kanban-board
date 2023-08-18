import { ACTION_FETCH_API, ACTION_GROUPING, ACTION_SORTING } from "./ActionTypes"

/**
 * 
 * @returns Object required for fetch action
 */
export const getData = ({tickets, users}) => ({
    type:ACTION_FETCH_API,
    payload:{
        tickets,
        users
    }
})

/**
 * 
 * @param {*} type on which basis grouping should be formed 
 * @returns Object required for grouping
 */
export const groupTickets = (type) => ({
    type:ACTION_GROUPING,
    payload:{
        type,
    }
})

/**
 * 
 * @param {*} order IN which order grouped item should be sorted
 * @returns Object required for sorting action
 */
export const sortTickets = (order) => ({
    type:ACTION_SORTING,
    payload:{
        order,
    }
})