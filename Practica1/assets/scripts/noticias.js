export class Noticia {
    getAll() {
        const tema = document.getElementById("barra").value;
        console.log(tema);
        //const url: string = "https://newsapi.org/v2/everything?q="+tema+"&sortBy=popularity&apiKey=fff1f155ba054917bb5e53baf2f7d063";
        const url = "https://newsapi.org/v2/everything?q=Apple&from=2021-10-04&sortBy=popularity&apiKey=fff1f155ba054917bb5e53baf2f7d063";
        return axios.get(url);
    }
}
