 class Animal_kingdom {

    constructor(Animal_class) {

        this.Animal_class = Animal_class;
        

}


        Arthropoda(){

            if(this.Animal_class = 'Arthropoda') {

             console.log("Arthropoda is without Backbone and a cold-blooded Animal")

      }

   }  
   
        Fish(){ 

            if(this.Animal_class = 'fish') {

              console.log("Fish is with  backbone and a cold-blooded Animal")

      }

   }    
        Amphibia(){

           if(this.Animal_class = ' Amphibia') {

             console.log(" Amphibia is with  backbone and a cold-blooded Animal")

       }

   }   
       Reptiles(){

           if(this.Animal_class = 'Reptile') {

             console.log(" Reptiles is with  backbone and a cold-blooded Animal")

       }

   }  

        Aves(){

            if(this.Animal_class = 'Ave') {

               console.log("Aves is with  backbone and a Warm-blooded Animal")

      }

   } 


        Mammals(){

            if(this.Animal_class = 'Mammal') {

             const mammal_result =  console.log(" Mammals is with  backbone and a warm-blooded Animal")

             return(mammal_result)

      }

   } 

   


}


     let my_animal = ["fish", "Mammal", "Ave"]

     const animal = new Animal_kingdom(my_animal)




     animal.Amphibia()
     
     animal.Fish()
     
     animal.Mammals()

     animal.Aves()

     animal.Reptiles()

     animal.Arthropoda()
     


     
