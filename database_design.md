# Database Design

## Project Title

Campus Skill Swap

## 1. Database Overview

The Campus Skill Swap database stores information about students, the skills they can teach, the skills they want to learn, and skill exchange activities.

## 2. Students Table

| Field | Data Type | Description |

|---|---|---|

| student_id | INT | Unique ID for each student |

| name | VARCHAR | Student's name |

| email | VARCHAR | Student's email address |

| university | VARCHAR | Student's university |

| major | VARCHAR | Student's major |

| availability | VARCHAR | Student's available time |

## 3. Skills Table

| Field | Data Type | Description |

|---|---|---|

| skill_id | INT | Unique ID for each skill |

| skill_name | VARCHAR | Name of the skill |

| category | VARCHAR | Skill category |

| description | TEXT | Description of the skill |

## 4. Student Skills Table

This table connects students with the skills they can teach.

| Field | Data Type | Description |

|---|---|---|

| student_skill_id | INT | Unique ID |

| student_id | INT | ID of the student |

| skill_id | INT | ID of the skill |

| skill_level | VARCHAR | Student's skill level |

## 5. Learning Requests Table

This table stores skills that students want to learn.

| Field | Data Type | Description |

|---|---|---|

| request_id | INT | Unique request ID |

| student_id | INT | ID of the student |

| skill_id | INT | Skill the student wants to learn |

| status | VARCHAR | Current request status |

## 6. Skill Exchange Table

This table records connections between students who want to exchange or share skills.

| Field | Data Type | Description |

|---|---|---|

| exchange_id | INT | Unique exchange ID |

| student_id | INT | Student requesting the exchange |

| partner_id | INT | Other student in the exchange |

| skill_id | INT | Skill being exchanged |

| exchange_date | DATE | Date of the exchange |

| status | VARCHAR | Exchange status |

## 7. Relationships

- One student can teach many skills.

- One skill can be taught by many students.

- One student can make many learning requests.

- One student can participate in many skill exchanges.

- The Student Skills table connects students and skills.

- The Learning Requests table connects students with the skills they want to learn.

## 8. Database Purpose

The database design supports the main functions of Campus Skill Swap by storing student profiles, available skills, learning requests, and skill exchanges. It provides a structure that could be used to develop a complete version of the website in the future.