/**
 * Created by Nikit on 4/2/2017.
 */
export interface IBreadcrumbDTO {
	id: number;
	parentId: number;
	title: string;
	child: IBreadcrumbDTO;
}

export interface IBreadcrumbsTree {
	id: number;
	title: string;
	child: IBreadcrumbsTree
}
