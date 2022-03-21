class Hangman{
    constructor(word,guesses){
        this.word=word.toLowerCase().split('')
        this.guesses=guesses
        this.guessed=[]
        this.status='playing'
    }
    makeGuess(g){
        if(this.guesses){
            const bad=!this.word.includes(g)
            const uniq=!this.guessed.includes(g)
    
            if(uniq && !bad){
                this.guessed.push(g)
            }
            else if(uniq && bad){
                this.guessed.push(g)
                this.guesses-=1
            }
            this.statusUpdate()
        }
    }
    get puzzle(){
        let puzzle=""
        this.word.forEach((e) => {
        if(this.guessed.includes(e) || e===' '){
            puzzle+=e
            }
        else {puzzle+='*'}
        })
        return puzzle
    }
    statusUpdate(){
        let res=this.puzzle
        if(this.guesses===0){
            if(res.includes('*')){
                this.status="Failed"
            }else{
                this.status="Finished"
            }
        }else if(this.guesses!=0 && !res.includes('*')){
            this.status="Finished"
        }
    }
    get statusMessage(){
        if(this.status==='Finished'){
            return "Great work! You guessed the word"
        }
        else if(this.status==='Failed'){
            return `Nice try! the word was "${this.word.join('')}"`
        }else{
            return `${this.guesses} guess(s) remaining`
        }
    }


}


