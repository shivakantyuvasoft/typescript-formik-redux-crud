import * as Yup from 'yup';
 
export const WishSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required*'),
    discription: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required*'),
});