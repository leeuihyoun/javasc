var arr = [6,3,40,7,2];

arr= arr.sort((a,b)=>a-b);

console.log(arr)

let arrs = ['한글34','한글12','가나다라','안녕하세요']
arrs.sort()
console.log(arrs)


ararys = [
	{'id':0, 'name':'홍길동'},
	{'id':1, 'name':'유관순'},
	{'id':2, 'name':'김유신'}
]

ararys.sort((a,b)=>{
	return a['name'].localeCompare(b['name'])//해당 지역의 언어순으로 정렬
})
console.log(ararys)

let a = ararys.filter((e)=>{
	return(e['id']) >= 2;
})
console.log(a)

// map : 일괄변경

let 달러 = [1,2,3,4,5,6,7,8,10]

let 원화 = 달러.map(e=>{
	return e*1000;
})
console.log(원화)

// forEach :배열의 각 요소를 분리해주는 배열전용 반복문
// 길이계산을 자동으로 
ararys.forEach((e)=>{
	console.log(e)
})

