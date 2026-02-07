const questions = [
  // ================= Nivel 1 =================
  {
    level: 1,
    topic: "JavaScript",
    question: "¿Qué palabra clave se usa para declarar una variable que puede cambiar?",
    options: ["const", "let", "var", "function"],
    correct: "let"
  },
  {
    level: 1,
    topic: "React",
    question: "¿Qué hook básico se usa para manejar estado en componentes funcionales?",
    options: ["useEffect", "useState", "useReducer", "useContext"],
    correct: "useState"
  },
  {
    level: 1,
    topic: "SQL",
    question: "¿Qué comando se usa para obtener datos de una tabla?",
    options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
    correct: "SELECT"
  },
  {
    level: 1,
    topic: "JavaScript",
    question: "¿Cuál de estos es un tipo de dato primitivo en JS?",
    options: ["Object", "Array", "Number", "Function"],
    correct: "Number"
  },
  {
    level: 1,
    topic: "React",
    question: "¿Qué se necesita importar para usar JSX en React?",
    options: ["React", "useState", "Component", "Node"],
    correct: "React"
  },

  // ================= Nivel 2 =================
  {
    level: 2,
    topic: "JavaScript",
    question: "¿Qué método de array devuelve un nuevo array con los elementos transformados?",
    options: ["forEach", "map", "filter", "reduce"],
    correct: "map"
  },
  {
    level: 2,
    topic: "React",
    question: "¿Cuál hook permite ejecutar código cuando el componente se monta o actualiza?",
    options: ["useState", "useEffect", "useReducer", "useMemo"],
    correct: "useEffect"
  },
  {
    level: 2,
    topic: "SQL",
    question: "¿Qué cláusula se usa para filtrar registros en una consulta SELECT?",
    options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
    correct: "WHERE"
  },
  {
    level: 2,
    topic: "Node.js",
    question: "¿Qué módulo de Node se usa para manejar archivos?",
    options: ["http", "fs", "path", "os"],
    correct: "fs"
  },
  {
    level: 2,
    topic: "JavaScript",
    question: "¿Qué palabra clave se usa para declarar una constante?",
    options: ["var", "let", "const", "final"],
    correct: "const"
  },

  // ================= Nivel 3 =================
  {
    level: 3,
    topic: "React",
    question: "¿Cómo pasamos información de un componente padre a un hijo?",
    options: ["props", "state", "context", "ref"],
    correct: "props"
  },
  {
    level: 3,
    topic: "JavaScript",
    question: "¿Qué hace el método .filter() en un array?",
    options: ["Elimina elementos", "Crea un nuevo array con elementos que cumplen la condición", "Transforma todos los elementos", "Ordena el array"],
    correct: "Crea un nuevo array con elementos que cumplen la condición"
  },
  {
    level: 3,
    topic: "SQL",
    question: "¿Qué palabra clave se usa para combinar tablas?",
    options: ["JOIN", "MERGE", "LINK", "CONNECT"],
    correct: "JOIN"
  },
  {
    level: 3,
    topic: "Node.js",
    question: "¿Cuál método de fs se usa para leer un archivo de forma sincrónica?",
    options: ["readFileSync", "readFileAsync", "fs.open", "fs.read"],
    correct: "readFileSync"
  },
  {
    level: 3,
    topic: "JavaScript",
    question: "¿Cuál de estos operadores compara valor y tipo?",
    options: ["==", "=", "===", "!="],
    correct: "==="
  },

  // ================= Nivel 4 =================
  {
    level: 4,
    topic: "React",
    question: "¿Qué hook se usa para manejar múltiples estados complejos o lógicos?",
    options: ["useState", "useReducer", "useEffect", "useMemo"],
    correct: "useReducer"
  },
  {
    level: 4,
    topic: "JavaScript",
    question: "¿Qué hace el método .reduce() en un array?",
    options: ["Filtra elementos", "Acumula valores en un solo resultado", "Ordena elementos", "Transforma todos los elementos"],
    correct: "Acumula valores en un solo resultado"
  },
  {
    level: 4,
    topic: "SQL",
    question: "¿Qué cláusula se usa para agrupar registros en SQL?",
    options: ["GROUP BY", "ORDER BY", "HAVING", "WHERE"],
    correct: "GROUP BY"
  },
  {
    level: 4,
    topic: "Node.js",
    question: "¿Cuál módulo de Node permite crear servidores web?",
    options: ["fs", "http", "path", "os"],
    correct: "http"
  },
  {
    level: 4,
    topic: "JavaScript",
    question: "¿Cuál es el resultado de: '5' + 2?",
    options: ["7", "'7'", "'52'", "Error"],
    correct: "'52'"
  },

  // ================= Nivel 5 =================
  {
    level: 5,
    topic: "React",
    question: "¿Qué hook permite compartir estado entre componentes sin pasar props?",
    options: ["useState", "useContext", "useReducer", "useEffect"],
    correct: "useContext"
  },
  {
    level: 5,
    topic: "JavaScript",
    question: "¿Qué devuelve typeof []?",
    options: ["array", "object", "list", "undefined"],
    correct: "object"
  },
  {
    level: 5,
    topic: "SQL",
    question: "¿Qué cláusula se usa para filtrar registros después de GROUP BY?",
    options: ["WHERE", "HAVING", "FILTER", "ORDER BY"],
    correct: "HAVING"
  },
  {
    level: 5,
    topic: "Node.js",
    question: "¿Qué método de fs se usa para escribir un archivo de forma sincrónica?",
    options: ["writeFileSync", "writeFileAsync", "fs.write", "fs.save"],
    correct: "writeFileSync"
  },
  {
    level: 5,
    topic: "JavaScript",
    question: "¿Qué hace el operador ??",
    options: ["Asigna valor por defecto si es null o undefined", "Suma valores", "Compara valores", "Error"],
    correct: "Asigna valor por defecto si es null o undefined"
  },

  // ================= Nivel 6 =================
  {
    level: 6,
    topic: "React",
    question: "¿Qué hook se usa para memorizar valores calculados costosos?",
    options: ["useState", "useMemo", "useCallback", "useReducer"],
    correct: "useMemo"
  },
  {
    level: 6,
    topic: "JavaScript",
    question: "¿Cuál es la diferencia entre var y let?",
    options: ["var tiene alcance global o de función, let tiene alcance de bloque", "No hay diferencia", "let se puede redeclarar, var no", "var solo sirve en Node"],
    correct: "var tiene alcance global o de función, let tiene alcance de bloque"
  },
  {
    level: 6,
    topic: "SQL",
    question: "¿Cuál es la función de INNER JOIN?",
    options: ["Combina solo registros que cumplen la condición", "Combina todos los registros", "Elimina registros duplicados", "Filtra registros por orden"],
    correct: "Combina solo registros que cumplen la condición"
  },
  {
    level: 6,
    topic: "Node.js",
    question: "¿Qué módulo permite manejar rutas de archivos y directorios?",
    options: ["http", "fs", "path", "os"],
    correct: "path"
  },
  {
    level: 6,
    topic: "JavaScript",
    question: "¿Qué hace el operador ?. (optional chaining)?",
    options: ["Evita errores si una propiedad es undefined o null", "Suma valores opcionales", "Compara opcionalmente", "Error de sintaxis"],
    correct: "Evita errores si una propiedad es undefined o null"
  }
];
