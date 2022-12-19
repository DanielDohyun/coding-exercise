// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(D, T) {
    // Implement your solution here

    let pTime = 0;
    let gTime = 0;
    let mTime = 0;
    let pTotal= 0;
    let gTotal = 0;
    let mTotal = 0;

    for (let i = 0; i<=D.length; i++) {
        if (T[i]) {
            let plastic = 0;
            let glass = 0;
            let metal = 0;
            for(let j = 0; j<=T[i].length; j++) {
                if(T[i][j] === 'P') {
                    plastic++; 
                    pTotal++;

                }
                if(T[i][j] === 'G') {
                    glass++;
                    gTotal++;
                }
                if(T[i][j] === 'M') {
                    metal++;
                    mTotal++;
                }
            }

            if (plastic) {
                let travelT = 0;
                for (let k= 0; k<=i; k++) {
                    travelT += D[k];
                }
            pTime = travelT*2 + pTotal;
            }

            if (glass) {
                let travelT = 0;
                for (let k= 0; k<=i; k++) {
                    travelT += D[k];
                }
            gTime = travelT*2 + gTotal;
            }

            if (metal) {
                let travelT = 0;
                for (let k= 0; k<=i; k++) {
                    travelT += D[k];
                }
            mTime = travelT*2 + mTotal;
            }

        }
    }
    return Math.max(pTime, gTime, mTime)
}