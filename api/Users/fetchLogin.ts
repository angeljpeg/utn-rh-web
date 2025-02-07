export async function fetchLogin({ matricula, password } : {matricula: string, password: string}) {
    try {
      const data = await fetch("http://localhost:2000/usuario/login", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ matricula, password })
      })
      const response = await data.json();
      return {...response}
    } catch (error) {
      console.error("error fetchlogin",error)
    }
  }