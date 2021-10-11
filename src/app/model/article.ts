export class Article
{
    titre:string;
    contenu:string;
    date:Date;
    constructor(titre :string,contenu : string,date : Date)
    {
        this.contenu=contenu;
        this.titre=titre;
        this.date =date;
    }

}