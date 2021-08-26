import Point from './Point';

export default function (center, radius) {
	return {
		center,
		radius,
		getCircumference() {
			return 2 * radius * Math.PI;
		},
		getArea() {
			return radius ** 2 * Math.PI;
		},
		includes(Point) {
			// TODO: write your code here
			formula = (point[0] - center[0]) * (point[0] - center[0]) + (point[1] - center[1]) * (point[1] - center[1])
			if (formula < (radius * radius)) return true;
			return false;
		}
	}
}
