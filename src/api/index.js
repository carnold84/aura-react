import localforage from "localforage";

class Api {
  store;

  init = async () => {
    this.store = localforage.createInstance({
      name: "aura"
    });
  };

  createProject = async data => {
    const allProjects = this.getItem("projects");

    const response = this.setItem(
      "projects",
      JSON.stringify([...allProjects, data])
    );

    if (response === true) {
      return data;
    } else {
      return false;
    }
  };

  getItem = async key => {
    return await this.store.getItem(key);
  };

  setItem = async (key, value) => {
    let success = false;

    await this.store
      .setItem(key, value)
      .then(() => {
        success = true;
      })
      .catch(function(err) {
        success = false;
      });

    return success;
  };
}

export default Api;
