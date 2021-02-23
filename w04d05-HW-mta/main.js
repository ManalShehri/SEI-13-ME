// define the lines
const Roads =
{
    N : ['Times Square','34th','28th','23rd','Union Square','8th'],
    L : ['8th', '6th', 'Union Square', '3rd', '1st'],
    six : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

// prints the trip details
const newTrip = (fromLine,fromStation,toLine,toStation) => {
    // retrive the arr 
    // when the trip in the same line  
    if (fromLine === toLine)
    {
        let route = []
        route = travelRout(fromStation,toStation,whichArr(fromLine),fromLine)
        return 'You must travel through the following stops on ' + fromLine +' Line: ' + route + '\n' + route.length +' stops in total.' 
    } 
    else // validation of entries
    {
        let firstRoute = [], secondRoute = []
        firstRoute = travelRout(fromStation,'Union Square',whichArr(fromLine),fromLine) 
        secondRoute = travelRout('Union Square',toStation,whichArr(toLine),toLine)
        return 'You must travel through the following stops on ' + fromLine +' Line: ' + firstRoute + '\n' + 'Change at Union Square.'
        + '\n' + 'Your journey continues through the following stops: ' + secondRoute + '\n' + (firstRoute.length + secondRoute.length) + ' stops in total.' 

    }
}

// returns the route as array
const travelRout = (frm,to,arr,LineName) => {
    const fromStationIndex = arr.indexOf(frm)
    const toStationIndex = arr.indexOf(to)
    // define route and calc the stpos
    let route = []
    let difference = toStationIndex - fromStationIndex ;
    // if the difference in (-) means the route is backword
    if (difference<= 0)
    {
        // reverse the route 
        for(let i=fromStationIndex-1; i>=toStationIndex; i--)
        {
            route.push(arr[i]);
        }
    } else {
        // define the route for the forward walk 
        route = arr.slice(fromStationIndex+1,toStationIndex + 1);
    }
    return route 
}

// find which line array
const whichArr = (name) => {
    if (name === 'N')
        return Roads.N;
    else if (name === 'L')
        return Roads.L
    else if (name === '6')
        return Roads.six;
}
console.log(newTrip('N', 'Times Square', '6', '33rd'));