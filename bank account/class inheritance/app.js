class Employee {
  constructor(name, designation, salary) {
    this.name = name;
    this.designation = designation;
    this.salary = salary;
  }
  login() {
    console.log(`${this.name} has logged in`);
  }
  logout() {
    console.log(`${this.name} has logged out`);
  }
  reqLeaves(x) {
    console.log(`${this.name} can request ${x} leaves`);
  }
  hours(x) {
    console.log(`${this.name} works ${x} hours`);
  }
}
class programmer extends Employee {
  lang(lang) {
    console.log(`i use ${lang} language`);
  }
super.hours()
console.log();

}
class developer extends programmer {
  codeEditor(codeEditor) {
    console.log(`i use ${codeEditor}`);
  }
}
class WebDeveloper extends developer {
  designWebsite() {
    console.log(`${this.name} is designing a website`);
  }

  testWebsite() {
    console.log(`${this.name} is testing the website`);
  }
}
class AppDeveloper extends developer {
  buildApp(platform) {
    console.log(`${this.name} is building an app for ${platform}`);
  }

  testApp() {
    console.log(`${this.name} is testing the app`);
  }
}
class frontEnd extends WebDeveloper {
  createUI() {
    console.log(`${this.name} is creating the user interface`);
  }

  optimizePerformance() {
    console.log(`${this.name} is optimizing website performance`);
  }
}
class backendDeveloper extends WebDeveloper {
  manageDatabase() {
    console.log(`${this.name} is managing the database`);
  }

  createAPI() {
    console.log(`${this.name} is creating an API`);
  }
}
class fullStackDeveloper extends WebDeveloper {
  developFullProject() {
    console.log(`${this.name} is developing the full web project`);
  }

  deployProject() {
    console.log(`${this.name} is deploying the project`);
  }
}

let ansharah = new fullStackDeveloper("Ansharah", "programmer", "500000");
console.log(ansharah.deployProject());
let sameen = new backendDeveloper("Ansharah", "programmer", "500000");
console.log(ansharah.deployProject());
