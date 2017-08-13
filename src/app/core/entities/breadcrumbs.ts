import { IBreadcrumbsTree } from "../interfaces/IBreadcrumbs";
/**
 * Created by Nikit on 4/2/2017.
 */
export class Breadcrumb {
	id: number;
	title: string;

	constructor(breadcrumbsTree: IBreadcrumbsTree) {
		this.id = breadcrumbsTree.id;
		this.title = breadcrumbsTree.title;
	}
}
