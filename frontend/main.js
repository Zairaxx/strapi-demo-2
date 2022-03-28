let renderClasses = async () => {
    let response = await fetch('http://localhost:1338/api/classes?populate=*')
    let json = await response.json();
    console.log(json);
    json.data.forEach((klass,i) => {
        let container = document.createElement("div")
        container.style.border = "3px solid black";
        let className = document.createElement("p");
        let education = document.createElement("p");
        let teacherList = document.createElement("ul");
        let studentList = document.createElement("ul");
        className.innerText = `Klass: ${klass.attributes.name}`;
        education.innerText = `Utbildning: ${klass.attributes.programme}`;
        let h2 = document.createElement("h2");
        h2.innerText = "Lärare";
        let h2s = document.createElement("h2");
        h2s.innerText = "Students";
        container.append(className, education, h2, teacherList, h2s, studentList)

        klass.attributes.teachers.data.forEach(teacher => {

         let teacherName = document.createElement("li");
         teacherName.innerText = teacher.attributes.name

         teacherList.append(teacherName);
        });

        klass.attributes.students.data.forEach(student => {

            let studentName = document.createElement("li");
            studentName.innerText = student.attributes.name
   
            studentList.append(studentName);
           });

        document.body.append(container);
    });

    
}

renderClasses().then(console.log(teacherList));