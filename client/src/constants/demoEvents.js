const dayEvents = [
    {
        eventId: "1545273914851", // Date.now().toString()
        title: "Meeting",
        location: "Wheeler 150",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 5734290,
        startAt: 9 * 60 + 30,
        endAt: 10 * 60 + 30,
        weekday: 0
    },
    {
        eventId: "1545273914852",
        title: "Meeting",
        location: "Wheeler 150",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 5734290,
        startAt: 12 * 60 + 30,
        endAt: 14 * 60,
        weekday: 4
    },
    {
        eventId: "1545273914853",
        title: "Meeting",
        location: "Wheeler 150",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 5734290,
        startAt: 9 * 60 + 30,
        endAt: 10 * 60 + 30,
        weekday: 3
    },
    {
        eventId: "1545273914854",
        title: "Meeting",
        location: "Wheeler 150",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 5734290,
        startAt: 15 * 60 + 30,
        endAt: 16 * 60 + 30,
        weekday: 3
    },
    {
        eventId: "1545273914855",
        title: "Meeting",
        location: "Wheeler 150",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 5734290,
        startAt: 13 * 60 + 30,
        endAt: 15 * 60,
        weekday: 1
    }
];

const phoneCall = [
    {
        eventId: "1545273914856",
        title: "Phone Call",
        location: "Recreational Sports Company",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 4469843,
        startAt: 11 * 60,
        endAt: 12 * 60 + 30,
        weekday: 0
    },
    {
        eventId: "1545273914857",
        title: "Phone Call",
        location: "AB Company client",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 4469843,
        startAt: 10 * 60,
        endAt: 11 * 60,
        weekday: 1
    },
    {
        eventId: "1545273914858",
        title: "Phone Call",
        location: "Marketing Team",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 4469843,
        startAt: 12 * 60,
        endAt: 13 * 60 + 45,
        weekday: 2
    },
    {
        eventId: "1545273914859",
        title: "Phone Call",
        location: "CEO Virginia West",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 4469843,
        startAt: 17 * 60,
        endAt: 18 * 60 + 30,
        weekday: 3
    },
    {
        eventId: "1545273914860",
        title: "Phone Call",
        location: "Team member AF",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 4469843,
        startAt: 10 * 60,
        endAt: 11 * 60,
        weekday: 4
    }
];

const tasks = [
    {
        eventId: "1545273914861",
        title: "Add features",
        location: "Project 1",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 10664370,
        startAt: 14 * 60,
        endAt: 15 * 60 + 15,
        weekday: 0
    },
    {
        eventId: "1545273914862",
        title: "Debug",
        location: "Project 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 10664370,
        startAt: 15 * 60 + 45,
        endAt: 16 * 60 + 45,
        weekday: 1
    },
    {
        eventId: "1545273914863",
        title: "Start Project 3",
        location: "Project with ABC client",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 10664370,
        startAt: 10 * 60 + 45,
        endAt: 11 * 60 + 45,
        weekday: 2
    },
    {
        eventId: "1545273914864",
        title: "Continue Projetc 3",
        location: "Project with ABC client",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 10664370,
        startAt: 13 * 60 + 45,
        endAt: 15 * 60,
        weekday: 2
    },
    {
        eventId: "1545273914865",
        title: "Review code",
        location: "Project 2",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 10664370,
        startAt: 15 * 60 + 45,
        endAt: 16 * 60 + 45,
        weekday: 4
    }
];

const sendEmails = [
    {
        eventId: "1545273914866",
        title: "Send email to client",
        location: "ABC client",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 16167015,
        startAt: 11 * 60 + 30,
        endAt: 13 * 60,
        weekday: 1
    },
    {
        eventId: "1545273914867",
        title: "Send email of projetc details",
        location: "Harvested Corporation",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 16167015,
        startAt: 9 * 60,
        endAt: 10 * 60 + 15,
        weekday: 2
    },
    {
        eventId: "1545273914868",
        title: "Respond emails",
        location: "Gavin Company",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, unde, nulla. Vel unde deleniti, distinctio inventore quis molestiae perferendis, eum quo harum dolorum reiciendis sunt dicta maiores similique! Officiis repellat iure odio debitis enim eius commodi quae deserunt quam assumenda, ab asperiores reiciendis minima maxime odit laborum, libero veniam non?",
        color: 16167015,
        startAt: 12 * 60,
        endAt: 13 * 60 + 45,
        weekday: 3
    }
];

export default [...dayEvents, ...phoneCall, ...tasks, ...sendEmails];
