export class Produit
{
   public get libelle(): string {
        return this._libelle;
    }
    public set libelle(value: string) {
        this._libelle = value;
    }
    public get lib(): string {
        return this._lib;
    }
    public set lib(value: string) {
        this._lib = value;
    }
    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    constructor(private _id: number, private _libelle: string,private _lib: string,private _prix:number)
    {    
    }
    
 
   
}