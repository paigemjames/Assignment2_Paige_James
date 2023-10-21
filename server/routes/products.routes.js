import express from 'express'
import productsCtrl from '../controllers/products.controller.js'
const router = express.Router()
router.route('/api/products')
.get(productsCtrl.list)
.post(productsCtrl.create)
router.route('/api/products/:id')
.get(productsCtrl.read)
.put(productsCtrl.update)
.delete(productsCtrl.remove)
router.param('id', productsCtrl.id)



router.route('/api/products').post(productsCtrl.create)
router.route('/api/products').get(productsCtrl.list)
router.route('/api/products/:id').get(productsCtrl.id)
router.route('/api/products/:id').put(productsCtrl.update)

router.route('/api/products').delete(productsCtrl.remove)
router.route('/api/products/:id').delete(productsCtrl.remove)


export default router