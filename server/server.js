require('dotenv').config();
const express=require('express'),mongoose=require('mongoose'),path=require('path'),cors=require('cors');
const app=express();app.use(cors());app.use(express.json());
app.use('/api/auth',require('./routes/authRoutes'));app.use('/api/products',require('./routes/productRoutes'));app.use('/api/orders',require('./routes/orderRoutes'));
app.use(express.static(path.join(__dirname,'../client')));app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'../client/index.html')));
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('MongoDB connected');app.listen(process.env.PORT||5000,()=>console.log('Server running'));}).catch(e=>console.error('Database error:',e.message));
