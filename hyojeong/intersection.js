var intersection = function(nums1, nums2) {
  let nums1Set = new Set(nums1);
   let resultSet = new Set();
    for (let num of nums2) {
      if (nums1Set.has(num)) resultSet.add(num);
    }
    return Array.from(resultSet)
  };

  intersection([1,2,2,1], [2,2])
//Output: [2]

intersection([4,9,5], [9,4,9,8,4])
//Output: [9,4]
