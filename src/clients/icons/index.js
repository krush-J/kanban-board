// Status releted icon

export const StatusDone = () => (
  <span style={{ color: "#2563eb" }}>
    <i class="bi bi-check-circle-fill"></i>
  </span>
);

export const StatusProgress = () => (
  <span style={{ color: "#fbbf24" }}>
    <i class="bi bi-circle-half"></i>
  </span>
);

export const StatusBacklog = () => (
  <span style={{ color: "#dfe0e5" }}>
    <i class="bi bi-dash-circle-dotted"></i>
  </span>
);

export const StatusCancel = () => (
  <span style={{ color: "#dfe0e5" }}>
    <i class="bi bi-x-circle-fill"></i>
  </span>
);

export const StatusTodo = () => (
  <span style={{ color: "#dfe0e5" }}>
    <i class="bi bi-circle"></i>
  </span>
);

// priority releted icons
export const PriorityNo = ({color}) => (
  <span style={{ color: color || "#dfe0e5" }}>
    <i class="bi bi-three-dots"></i>
  </span>
);

export const PriorityUrgent = () => (
  <span style={{ color: "#fb923c"}}>
    <i class="bi bi-exclamation-square-fill"></i>
  </span>
);

export const PriorityLow = ({color}) => (
  <span style={{ color: color || "#dfe0e5" }}>
    <i class="bi bi-wifi-1"></i>
  </span>
);

export const PriorityMedium = ({color}) => (
  <span style={{ color: color || "#dfe0e5" }}>
    <i class="bi bi-wifi-2"></i>
  </span>
);

export const PriorityHigh = ({color}) => (
  <span style={{ color: color || "#dfe0e5" }}>
    <i class="bi bi-wifi"></i>
  </span>
);

export const PlusIcon = ({color}) => (
  <span style={{ color: color || "#dfe0e5" }}>
    <i class="bi bi-plus-lg"></i>
  </span>
);

export const HeadDown = ({color}) => (
  <span style={{ color: color || "#dfe0e5" }}>
    <i class="bi bi-chevron-down"></i>
  </span>
);

