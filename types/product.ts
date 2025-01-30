
export interface Foods {
    
    _id : string;
    name : string;
    _type : "food";
    image? : {
        asset : {
            _ref : string;
            _type : "image"; 
        }
    };
    price : number;
    description: string;
}

export interface Chef {
    _id: string;
    name: string;
    _type: "chef";
    image?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    specialty: string;
    description: string;
  }