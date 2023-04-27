// K é no máximo uma chave de O
type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

interface Edgerunner {
  name: string;
  age: number;
  cyberwares: string[];
  skills: string[];
}

const getKey: GetKeyFn = (obj, key) => obj[key];

const displayEdgerunnerSpeciality = (edgerunner: Edgerunner, infoType: keyof Edgerunner): void => {
  console.log(`${infoType[0].toUpperCase()}${infoType.slice(1)}:`);
  if (infoType === "cyberwares" || infoType === "skills") {
    const speciality = getKey(edgerunner, infoType);
    speciality.forEach((item) => console.log(`- ${item}`));
  } else {
    throw new Error("Invalid info type in displayEdgerunnerSpeciality(). Try 'cyberwares' or 'skills'.");
  }
};

const displayEdgerunnerCharSheet = (edgerunner: Edgerunner): void => {
  console.log(`Name: ${edgerunner.name}\nAge: ${edgerunner.age}`);
  displayEdgerunnerSpeciality(edgerunner, "cyberwares");
  displayEdgerunnerSpeciality(edgerunner, "skills");
};

const edgerunner: Edgerunner = {
  name: "V",
  age: 26,
  cyberwares: ["Kiroshi Optics", "Subdermal Grip", "Mantis Blades"],
  skills: ["Stealth", "Athletics", "Handguns", "Blades"],
};

displayEdgerunnerCharSheet(edgerunner);
