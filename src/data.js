var uniqid = require('uniqid');
const TaskData = [{
        id: uniqid(),
        name: "Soạn bài tập NodeJS",
        labelArr: ["FrontEnd", "BackEnd"],
        priority: 1,
        memberIDArr: ["user_1"],
        status: 1,
        description: "Soạn lý thuyết Exprexx FrameWork"
    },
    {
        id: uniqid(),
        name: "Soạn bài tập BackEnd",
        labelArr: ["BackEnd", "API", "FrontEnd"],
        priority: 3,
        memberIDArr: ["user_3"],
        status: 2,
        description: "Soạn lý thuyết Exprexx FrameWork"
    },
    {
        id: uniqid(),
        name: "Soạn Python",
        labelArr: ["BackEnd"],
        priority: 2,
        memberIDArr: ["user_2", "user_3"],
        status: 3,
        description: "Soạn lý thuyết Exprexx FrameWork"
    },
    {
        id: uniqid(),
        name: "Soạn bài tập NodeJS",
        labelArr: ["FrontEnd", "BackEnd"],
        priority: 1,
        memberIDArr: ["user_2"],
        status: 4,
        description: "Soạn lý thuyết Exprexx FrameWork"
    },
    {
        id: uniqid(),
        name: "Soạn bài tập NodeJS",
        labelArr: ["FrontEnd", "BackEnd", "Issue"],
        priority: 1,
        memberIDArr: ["user_2"],
        status: 2,
        description: "Soạn lý thuyết Exprexx FrameWork"
    }
]

export default TaskData;