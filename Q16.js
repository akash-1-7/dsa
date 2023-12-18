/*
Name : DESHMUKH VIRAJ
Div : A
ROllNo. : 2301030
16.Write a program to find Maximum subarray in a given array.
*/
// SubarrayWithMaxSum

function SubarrayWithMaxSum(nums)
{
	
	var endIndex, currMax = nums[0]
	var globalMax = nums[0]

	for(var i = 1; i < nums.length; ++i)
	{
		
		
		currMax = Math.max(nums[i],
						nums[i] + currMax)

		if (currMax > globalMax) 
		{
			globalMax = currMax
			endIndex = i
		}
	}

	var startIndex = endIndex

	
	while (startIndex >= 0) 
	{
		globalMax -= nums[startIndex]

		if (globalMax == 0)
			break

	
		startIndex--;
	}

	
	for(var i = startIndex;	i <= endIndex; ++i) 
	{
		console.log(nums[i] + " ");
	}
}


var arr = [ -2, -5, 6, -2,
			-3, 1, 5, -6 ];
			

SubarrayWithMaxSum(arr);


