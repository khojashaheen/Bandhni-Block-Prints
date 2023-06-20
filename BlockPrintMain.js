function setup() {
	createCanvas(windowWidth, windowHeight);
	background("rgb(68,189,194)");
}

let maxTiles=1
let blockCols=4
let blockRow=2

function draw() {

	let side = 40

	stepCol=floor((frameCount/(20))%(blockCols+1))
	stepRow=floor(frameCount/(20*(blockCols+1)))
	//console.log("stepRow:"+stepRow+"-stepCol:"+stepCol+"-frameCount"+frameCount)
	translate(width*2/10,height/10)

	let dict = createStringDict("Hello","1")
	translate((stepCol)*200*maxTiles,(stepRow)*200*maxTiles)
	recursiveSquares(maxTiles,maxTiles,side,dict,maxTiles)

	if (stepRow==blockRow && stepCol== blockCols) {
				noLoop()
	}

}

function recursiveSquares(x,y,side,dictTraversed,maxTiles) {	
	//stop pattern
	if (x<0 || y<0) {
		return;
	} else {
		if (!dictTraversed.hasKey((x)+"-"+(y))) {
			printBandhaniBlock(x,y,maxTiles)
			dictTraversed.set((x+"-"+y),"1")
		}
		
		if (!dictTraversed.hasKey((x-1)+"-"+(y-1))) {
				recursiveSquares(x-1,y-1,side,dictTraversed,maxTiles)
		} 
		
		
		if (!dictTraversed.hasKey((x-1)+"-"+(y-1))) {
				recursiveSquares(x-1,y-1,side,dictTraversed,maxTiles)
		} 
		
		if (!dictTraversed.hasKey((x-1)+"-"+(y))) {
				recursiveSquares(x-1,y,side,dictTraversed,maxTiles)
		}
		 
		if (!dictTraversed.hasKey((x)+"-"+(y-1))) {
				recursiveSquares(x,y-1,side,dictTraversed,maxTiles)
		}

	}
	
	function printBandhaniBlock(x,y,maxTiles) {	
			
			push()
			noStroke()
			noFill()
			rotate(radians(45))
			square(x*side*2,y*side*2,side)
		
			stroke("rgb(255,255,255)")
			strokeWeight(2)
			//outer circles
			circle(x*side*2,y*side*2,side/6)
			circle(x*side*2,y*side*2+side,side/6)
			circle(x*side*2+side,y*side*2,side/6)
			circle(x*side*2+side,y*side*2+side,side/6)
			circle(x*side*2,y*side*2+side/2,side/6)
			circle(x*side*2+side/2,y*side*2,side/6)
			circle(x*side*2+side,y*side*2+side/2,side/6)
			circle(x*side*2+side/2,y*side*2+side,side/6)
			
			//inner circles
			circle(x*side*2+side/4,y*side*2+side/4,side/5)
			circle(x*side*2+side/4,y*side*2+side*3/4,side/5)
			circle(x*side*2+side*3/4,y*side*2+side*1/4,side/5)
			circle(x*side*2+side*3/4,y*side*2+side*3/4,side/5)
		
			//center circle		
			circle(x*side*2+side/2,y*side*2+side/2,side/5)
		
			//in between circle
			// stroke("rgb(0,0,128)")
			// circle(side*7/4,y-side*7/4,side/6)
			// circle(side*7/4,y-side*9/4,side/6)
			// circle(side*5/4,y-side*7/4,side/6)
			// circle(side*5/4,y-side*9/4,side/6)

			//stroke("rgb(255,255,255)")
			stroke("rgb(0,0,128)")
			circle((maxTiles+1)*2.5*side,(maxTiles)*1.5*side,side/5)
		
			pop()

			

	}

	
}