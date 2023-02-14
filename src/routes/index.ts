import { swaggerRoutes } from '@config/swagger';
import { Router } from 'express';
import { homeRoutes } from '../modules/home/route';

const router = Router();

router.use('/', homeRoutes);

router.use('/doc', swaggerRoutes);

export { router };
