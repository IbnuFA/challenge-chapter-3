// console.log("Hello World");


//output draft > 20 "Banyak nih muatannya"
//output draft < 20 "Lebih banyak muatan orangnya"
/*
    awak kapal dianggap menambah 1.5 unit draft
    JIKA kapal memiliki draft lebih dari 20
    Dianggap lebih banyak muatannya ketimbang awaknya
*/

function Ship(draft, crew) {
    this.draft = draft;
    this.crew = crew;
    totaldraft = 1.5 * this.draft;


    if(totaldraft > 20) {
        console.log("Banyak nih muatannya")
    }else if (totaldraft < 20){
        console.log("Lebih banyak muatan orangnya")
    }else{
        console.log("Data tidak valid")
    }
};

Ship(10, 20)