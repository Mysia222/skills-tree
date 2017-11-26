var skillObj = {
    name: "Frontend",
    skills: [{
            name: "HTML & CSS",
            skills: [{
                    name: "Understanding block, inline and table models"
                },
                {
                    name: "Stylesheets",
                    skills: [{
                            name: "Positioning",
                            skills: [{
                                name: "static, relative and absolute, fixed, sticky"
                            }]
                        },
                        {
                            name: "Understanding of box model"
                        },
                        {
                            name: "Understanding floating"
                        }
                    ]
                }
            ]
        },
        {
            name: "JavaScript",
            skills: [{
                    name: "Core",
                    skills: [{
                            name: "DOM"
                        },
                        {
                            name: "Events"
                        },
                        {
                            name: "Data structures",
                            skills: [{
                                    name: "Primitives and limitations"
                                },
                                {
                                    name: "Object"
                                }
                            ]
                        },
                    ]
                },
                {
                    name: "Approaches",
                    skills: [{
                            name: "OOP",
                            skills: [{
                                    name: "class"
                                },
                                {
                                    name: "Prototypes"
                                }
                            ]
                        },
                        {
                            name: "Asynchronous programming"
                        }
                    ]
                },
                {
                    name: "Frameworks & libraries",
                    skills: [{
                            name: "React"
                        },
                        {
                            name: "jQuery"
                        }
                    ]
                }
            ]
        }
    ]
};
const list = document.getElementById('list');

function showSkillList(obj) {
    var oneItem = '<li>' + obj.name + '</li>';
    if (obj.skills) {
        oneItem = '<li class = "sub-listings">' + obj.name + '</li>';
        oneItem += '<ul>'
        obj.skills.forEach(val => {
            oneItem += showSkillList(val);
        });
        oneItem += '</ul>'
    }
    return oneItem;
}

function changeVisibilityForList() {
    var isListShown = true;
    list.addEventListener('click', (event) => {
        var sibling = event.target.nextSibling;
        if (sibling && event.target.nodeName == 'LI' && sibling.nodeName == 'UL') {
            isListShown = !isListShown;
            if (!isListShown) {
                sibling.style.display = "";
            } else {
                sibling.style.display = "none";
            }
        }
    });
}

list.innerHTML = showSkillList(skillObj);
changeVisibilityForList();