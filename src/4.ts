class Key {
  private signature: number = Math.random();

  public getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: true | false;
  public key: Key;
  private tenants: Person[];
  public comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
  }
  public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  public openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    } else {
      console.log("Invalid key");
    }
  }
}

const key = new Key();

const house = new MyHouse();
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
