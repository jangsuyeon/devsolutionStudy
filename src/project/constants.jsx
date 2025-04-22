import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"

export const COLUMN_NAMES = {
    PLANNED: "Planned",
    IN_PROGRESS: "In progress",
    COMPLETE: "Complete",
};

export const data = [
    { id: 1, name: "회원", description: "회원 관리 기능 개발", dueDate: "2025-03-01", column: COLUMN_NAMES.PLANNED },
    { id: 2, name: "대시보드", description: "대시보드 개발", dueDate: "2025-03-10", column: COLUMN_NAMES.PLANNED },
    { id: 3, name: "프로젝트", description: "프로젝트 추가 개발", dueDate: "2025-04-01", column: COLUMN_NAMES.PLANNED },
];

// 기능
export const tasks = [
    { value: "UX",          label: "UX" },
    { value: "Code Review", label: "Code Review" },
    { value: "Info",        label: "Info" }
];

// 사용자
export const Users = [
    { value: "user01@gmail.com", label: "1사용자" },
    { value: "user02@gmail.com", label: "2사용자" },
    { value: "user03@gmail.com", label: "3사용자" },
    { value: "user04@gmail.com", label: "4사용자" },
    { value: "user05@gmail.com", label: "5사용자" },
];

// 부서명
export const teams = [
    { value: "A", label: "A"},
    { value: "B", label: "B"},
    { value: "C", label: "C"},
    { value: "D", label: "D"},
    { value: "E", label: "E"},
]

// activity
export const activity = [
    { email: "user01@gmail.com", name: "1사용자", comment: "코드리뷰 진행 완료", date: "2025-05-05" },
    { email: "user02@gmail.com", name: "2사용자", comment: "안녕하세요!", date: "2025-05-05" },
    { email: "user03@gmail.com", name: "3사용자", comment: "안녕하세요!", date: "2025-05-05" },
    { email: "user04@gmail.com", name: "4사용자", comment: "안녕하세요!", date: "2025-05-05" },
    { email: "user05@gmail.com", name: "5사용자", comment: "안녕하세요!", date: "2025-05-05" },
]