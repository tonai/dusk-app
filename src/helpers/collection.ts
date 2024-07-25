import { Box3, Vector3 } from "three";
import { GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

export function loadGLTFModel<T extends object, R extends { gltf: GLTF } & T>(
  model: string,
  args?: T,
): Promise<R> {
  return new Promise((resolve, reject) => {
    loader.load(
      model,
      // called when the resource is loaded
      (gltf) => resolve({ gltf, ...args } as R),
      // called while loading is progressing
      () => {},
      // called when loading has errors
      reject,
    );
  });
}

export interface IModel {
  gltf: GLTF;
  vector: Vector3;
}

export interface ICollectionModel extends IModel {
  x: number;
  z: number;
}

export async function loadGLTFCollection(
  collection: string[][],
  path: string = "/",
): Promise<ICollectionModel[]> {
  const promises = collection
    .map((list, x) =>
      list.map((model, z) => loadGLTFModel(path + model, { x, z })),
    )
    .flat();
  const models = await Promise.all(promises);
  return models.map((model) => {
    const box = new Box3().setFromObject(model.gltf.scene);
    const vector = box.getSize(new Vector3());
    return { ...model, vector };
  });
}

export async function loadModels(
  collection: string[],
  path = "/",
  ext = '.glb'
): Promise<Record<string, IModel>> {
  const promises = collection
    .map((model) => loadGLTFModel(path + model + ext))
    .flat();
  const models = await Promise.all(promises);
  return Object.fromEntries(
    models.map((model) => {
      const box = new Box3().setFromObject(model.gltf.scene);
      const vector = box.getSize(new Vector3());
      return [model.gltf.scene.name, { ...model, vector }];
    }),
  );
}
