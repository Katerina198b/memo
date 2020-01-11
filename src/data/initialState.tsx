export const initialState = {
  "user": {
    "userName": "katerina198b",
    "mail": "k228747@yandex.ru"
  },
  "cards": [
    {
      "count": 7,
      "time": 13,
      "title": "Git",
      "background": "orange",
      "id": "1",
      "progress": 16,
      "color": "black",
      "definitions": [
        {
          "title": "Год создания GIT",
          "description": "2005",
          "time": 10,
          "level": "bad",
          "id": "1"
        },
        {
          "title": "Стадии жизни файла",
          "description": "untracked, unmodified, modified, staged",
          "time": 10,
          "level": "bad",
          "id": "2"
        },
        {
          "title": "alias",
          "description": "короткое и удобное для запоминания имя, используемое вместо длинного и сложного",
          "time": 30,
          "level": "good",
          "id": "3"
        },
        {
          "title": "алгоритм хеширование ветвей",
          "description": "git commit --amend меняет SHA-1 коммита. SHA-1 - secure hash algorithm 1",
          "time": 2,
          "level": "perfect",
          "id": "4"
        },
        {
          "title": "Удаление файла из всех коммитов",
          "description": "git filter-branch --tree-filter 'rm -f passwords.tsx' HEAD",
          "time": 0,
          "level": "bad",
          "id": "5"
        }
      ],
      "selected": ["1", "2", "3"]
    },
    {
      "count": 12,
      "time": 40,
      "title": "Webpack",
      "background": "pink",
      "id": "2",
      "progress": 18,
      "color": "white",
      "definitions": [
        {
          "title": "webpack",
          "description": "static module bundler for modern javascript application",
          "time": 10,
          "level": "bad",
          "id": "1"
        },
        {
          "title": "entity",
          "description": "an entity point indicated which module webpack should use to begin bundle out its internal dependency graph",
          "time": 10,
          "level": "bad",
          "id": "2"
        },
        {
          "title": "output",
          "description": "property tell webpavk where ti emit the bundles it creates and how to name these file",
          "time": 30,
          "level": "good",
          "id": "3"
        },
        {
          "title": "loaders",
          "description": "Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph",
          "time": 2,
          "level": "perfect",
          "id": "4"
        },
        {
          "title": "plugins",
          "description": "Plugins can be leveraged to perform a wider range of tasks like bundle optimizations that correspond to each environment",
          "time": 0,
          "level": "bad",
          "id": "5"
        },
        {
          "title": "mode",
          "description": "mode parameters to either development^ production or none, you can enable webpack built-in optimizations that correspond to each environment. Default: production",
          "time": 0,
          "level": "bad",
          "id": "5"
        }
      ],
      "selected": ["1", "4", "5"]
    },
    {
      "count": 55,
      "time": 3,
      "title": "Куки",
      "background": "blue",
      "id": "3",
      "progress": 67,
      "color": "white",
      "definitions": [
        {
          "title": "cookie",
          "description": "небольшие строки данных, которых хранятся в браузере. Являются частью HTTP протокола6 определнного в спецификации RFC 6265",
          "time": 10,
          "level": "bad",
          "id": "1"
        },
        {
          "title": "как установить куки",
          "description": "заголов Set-Cookie для HTTP протокола, затем Cookie заголовок клиента, или из javascript document.cookie = 'user=John'",
          "time": 10,
          "level": "bad",
          "id": "2"
        },
        {
          "title": "когда истекает",
          "description": "document.cookie = \"doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT\"",
          "time": 30,
          "level": "good",
          "id": "3"
        }
      ],
      "selected": ["1", "3"]
    },
    {
      "count": 10,
      "time": 0,
      "title": "HTTP заголовки",
      "background": "peach",
      "id": "4",
      "progress": 100,
      "color": "black"
    }
  ],
  "exams": [
    {
      "count": 7,
      "title": "вычматы 3 семестр",
      "id": "1",
      "definitions": [
        {
          "title": "Год создания GIT",
          "description": "2005",
          "time": 10,
          "level": "bad",
          "id": "1"
        },
        {
          "title": "Стадии жизни файла",
          "description": "untracked, unmodified, modified, staged",
          "time": 10,
          "level": "bad",
          "id": "2"
        },
        {
          "title": "alias",
          "description": "короткое и удобное для запоминания имя, используемое вместо длинного и сложного",
          "time": 30,
          "level": "good",
          "id": "3"
        },
        {
          "title": "алгоритм хеширование ветвей",
          "description": "git commit --amend меняет SHA-1 коммита. SHA-1 - secure hash algorithm 1",
          "time": 2,
          "level": "perfect",
          "id": "4"
        },
        {
          "title": "Удаление файла из всех коммитов",
          "description": "git filter-branch --tree-filter 'rm -f passwords.tsx' HEAD",
          "time": 0,
          "level": "bad",
          "id": "5"
        }
      ]
    },
    {
      "count": 12,
      "title": "матан 3 семестр",
      "id": "2",
      "definitions": [
        {
          "title": "webpack",
          "description": "static module bundler for modern javascript application",
          "time": 10,
          "level": "bad",
          "id": "1"
        },
        {
          "title": "entity",
          "description": "an entity point indicated which module webpack should use to begin bundle out its internal dependency graph",
          "time": 10,
          "level": "bad",
          "id": "2"
        },
        {
          "title": "output",
          "description": "property tell webpavk where ti emit the bundles it creates and how to name these file",
          "time": 30,
          "level": "good",
          "id": "3"
        },
        {
          "title": "loaders",
          "description": "Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency graph",
          "time": 2,
          "level": "perfect",
          "id": "4"
        },
        {
          "title": "plugins",
          "description": "Plugins can be leveraged to perform a wider range of tasks like bundle optimizations that correspond to each environment",
          "time": 0,
          "level": "bad",
          "id": "5"
        },
        {
          "title": "mode",
          "description": "mode parameters to either development^ production or none, you can enable webpack built-in optimizations that correspond to each environment. Default: production",
          "time": 0,
          "level": "bad",
          "id": "5"
        }
      ]
    },
    {
      "count": 55,
      "title": "вступительные яндекса",
      "id": "3",
      "definitions": [
        {
          "title": "cookie",
          "description": "небольшие строки данных, которых хранятся в браузере. Являются частью HTTP протокола6 определнного в спецификации RFC 6265",
          "time": 10,
          "level": "bad",
          "id": "1"
        },
        {
          "title": "как установить куки",
          "description": "заголов Set-Cookie для HTTP протокола, затем Cookie заголовок клиента, или из javascript document.cookie = 'user=John'",
          "time": 10,
          "level": "bad",
          "id": "2"
        },
        {
          "title": "когда истекает",
          "description": "document.cookie = \"doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT\"",
          "time": 30,
          "level": "good",
          "id": "3"
        }
      ]
    }
  ]
};
