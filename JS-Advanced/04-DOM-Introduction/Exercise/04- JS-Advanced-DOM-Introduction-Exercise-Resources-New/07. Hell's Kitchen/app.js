function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      let text = document.getElementById('inputs').children[1].value;
      let array = JSON.parse(text).map(e => e.split(' - '));
      let newArray = [];
      for (let index = 0; index < array.length; index++) {
         let name = array[index][0];
         let rawWorkers = array[index][1].split(', ').map(e => e.split(' '));
         let workers = [];
         let findRest = newArray.find(e => e.name === name);
         if (findRest === undefined) {

            for (let i = 0; i < rawWorkers.length; i++) {
               let worker = rawWorkers[i][0];
               let selary = Number(rawWorkers[i][1])
               workers.push({ worker, selary })
            }
            newArray.push({ name, workers });

         } else {

            for (let i = 0; i < rawWorkers.length; i++) {
               let worker = rawWorkers[i][0];
               let selary = Number(rawWorkers[i][1])
               let findWorker = findRest.workers.find(e => e.worker === worker);
               if (findWorker === undefined) {
                  findRest.workers.push({ worker, selary });
               } else {
                  findWorker.selary += selary;
               }
            }

         }
      }

      
      for (let index = 0; index < newArray.length; index++) {
         let best = 0;
         let total = 0; 
         for (let i = 0; i < newArray[index].workers.length; i++) {
            let selary = newArray[index].workers[i].selary;
            if (selary > best) {
               best = selary;
            }
            total += selary;
         }
         let avg = total / newArray[index].workers.length;
         newArray[index].best = best;
         newArray[index].avg = avg;

      }

      newArray = newArray.sort((a, b) => b.avg - a.avg);
      let bestRest = newArray[0];
      bestRest.workers = bestRest.workers.sort((a, b) => b.selary - a.selary);

      let result1 = `Name: ${bestRest.name} Average Salary: ${(bestRest.avg).toFixed(2)} Best Salary: ${(bestRest.best).toFixed(2)}`
      document.getElementById('bestRestaurant').children[2].textContent = result1;

      let result2 = '';
      for (let i = 0; i < bestRest.workers.length; i++) {
         result2 += `Name: ${bestRest.workers[i].worker} With Salary: ${(bestRest.workers[i].selary).toFixed(2)} `
      }
      document.getElementById('workers').children[2].textContent = result2;

   }
}