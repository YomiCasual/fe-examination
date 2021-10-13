import AccountImage from '../../assets/images/banner-image.png';

const Account = () => {
  return (
    <div className='account center'>
      <div className='account__image'>
        <img src={AccountImage} alt='account-img' />
      </div>
      <div className='account__content'>
        <h3>My Account</h3>
        <div className='account--form'>
          <div className='form__group'>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='John Doe' />
          </div>

          <div className='split__form'>
            <div className='form__group'>
              <label htmlFor='name'>Mobile</label>
              <input type='number' placeholder='08033614885' />
            </div>
            <div className='form__group'>
              <label htmlFor='name'>Email</label>
              <input type='email' placeholder='yomionisade@gmail.com' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
