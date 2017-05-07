
  // ## Array Cardio Day 2

  const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];

  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];

  // Some and Every Checks

  // Array.prototype.some() // is at least one person 19 or older?

  // const old = people.some(function(age){
  //   if(2017 - age.year >= 19) return true;
  // });

  const old = people.some(age => ((new Date()).getFullYear()) - age.year >= 19);

  console.log(old);

  // Array.prototype.every() // is everyone 19 or older?

  const oldest = people.every(age => ((new Date()).getFullYear()) - age.year >= 19);

  console.log(oldest);

  // Array.prototype.find()
  // find the comment with the ID of 823423
  const theOne = comments.find(ids => ids.id === 823423);

  console.log(theOne);

  // Array.prototype.findIndex()

  // Find the comment with this ID
  // delete the comment with the ID of 823423

  const deleteId = comments.findIndex(comment => comment.id === 823423);
    const newComments = [
      ...comments.slice(0, deleteId),
      ...comments.slice(deleteId + 1)

    ];
  console.log(deleteId);
  console.log(newComments);
