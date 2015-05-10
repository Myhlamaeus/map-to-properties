export default function mapToProperties (array, object) {
  if (!Array.isArray(array)) {
    throw new TypeError('mapToProperties: expects argument 0 to be an array')
  }

  if (typeof object !== 'object') {
    throw new TypeError('mapToProperties: expects argument 1 to be an object')
  }

  return array.map((prop) => object[prop])
}
