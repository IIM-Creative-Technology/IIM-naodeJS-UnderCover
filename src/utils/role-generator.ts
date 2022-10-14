// import Player from "../models/Player";
let players= ["jon","van","dan","lol","val","dal","mal","pol"]

async function roleGenerator(): Promise<void> {
    let count = 0
    for(let i = 0; i < players.length; i++){
        let player: string|number = players[i]
          player = Math.round(Math.random())
          console.log(player)
         if ( Number(player) == Number(0) &&  count == Number(1) ) {
           // Player.role= "civile"
           console.log("civile")
        }
        else if( Number(player) == 0) {
          //  Player.role= "undercover"
            count++
            console.log("undercover")
        }
        else String: {
        // Player.role= "civile"
        console.log("civile")
    }
    };
}

export default roleGenerator