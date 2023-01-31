import { Hono } from 'hono';

export interface Controller {
	init(app: Hono): void;
}
