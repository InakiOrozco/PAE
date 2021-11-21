<<<<<<< Updated upstream:noticias.ts
declare let axios;

export class Noticia {
    getAll(): Promise<any> {
        const tema = document.getElementById("barra").value;
        console.log(tema);
        const url: string = "https://newsapi.org/v2/everything?q="+tema+"&sortBy=popularity&apiKey=fff1f155ba054917bb5e53baf2f7d063";
        return axios.get(url);
    }
=======
declare let axios;

export class Noticia {
    getAll(): Promise<any> {
        const tema = document.getElementById("barra").value;
        console.log(tema);
        //const url: string = "https://newsapi.org/v2/everything?q="+tema+"&sortBy=popularity&apiKey=fff1f155ba054917bb5e53baf2f7d063";
        const url: string = "https://newsapi.org/v2/everything?q=Apple&from=2021-10-04&sortBy=popularity&apiKey=fff1f155ba054917bb5e53baf2f7d063"
        return axios.get(url);
    }
>>>>>>> Stashed changes:Practica1/src/scripts/noticias.ts
}