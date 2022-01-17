import logo from './logo.svg';
import './App.css';

function App() {

  //         CodeQuality  leve2
  
  async function getUsers() {
    let doc = await Promise.all(getUser(), getProfile(), getPosts());
  
    let user = doc[0],  Profile = doc[1], p = doc[2];

    const userProfile = {
      user: user,
      profile: Profile,
      posts: p
    };
    console.log("userProfile", userProfile)
    return userProfile;
  }


  //     DataStructures leve2
  const oddNumber = () =>{
    let arr =[1, 3, 4, 6, 7, 8];
    let odd = []
    for(let i =0; i< arr.length; i++){
      if(arr[i]%2 !== 0){
        odd.push(arr[i])
      }
    }
    console.log("All odd number", odd);
    return odd;
  }

  const upperVowel = () =>{
    let data = "Elie";
    data = data.split('')
    for(let i=0; i< data.length; i++){
      if(data[i] == 'a' || data[i] == 'e' || data[i] == 'i' || data[i] == 'o' ||data[i] == 'u' ||data[i] == 'A' ||data[i] == 'E' ||data[i] == 'I' ||data[i] == 'O' ||data[i] == 'U'){
        data[i] = data[i].toUpperCase();
      }
    }
    console.log(data);
    return data;
  }


  var maxNumber = ()=>{
    var Arr = [1, 3, 4, 6, 7, 8, 2, 5, 10];
    Arr = Arr.sort(function(a, b) {
      return a - b;
    });
    let length = Arr.length;
    max = Arr[length -1];
    console.log("max", max);
    return max
  }

  // LoopsIterations leve2

  var fib = (n) => {
    if (n === 1) {
      return [0, 1];
    } else {
      var arr = fib(n - 1);
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
       var sumofFib = 0;
       for(let i =0; i< arr.length; i++){
        sumofFib += arr[i];
       }
      console.log("sumofFib", sumofFib);
      return arr;
    }
  };
  console.log(fib(6));

  


  return (
    <div className="App">
     
    </div>
  );
}

export default App;
