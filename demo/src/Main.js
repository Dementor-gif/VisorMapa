import React from 'react';
import { useIntl } from 'react-intl';
import Switch from 'react-switch';
import { FaHeart, FaBars } from 'react-icons/fa';
import reactLogo from './assets/logo.svg';

const Main = ({
  collapsed,
  rtl,
  image,
  handleToggleSidebar,
  handleCollapsedChange,
  handleRtlChange,
  handleImageChange,
}) => {
  const intl = useIntl();
  return (
    <main>
      <div className="btn-toggle" onClick={() => handleToggleSidebar(true)}>
        <FaBars />
      </div>
      <header>
        <h1>
          <img width={80} src={reactLogo} alt="react logo" /> {intl.formatMessage({ id: 'title' })}
        </h1>
        <p>{intl.formatMessage({ id: 'description' })}</p>

        <div class="container">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </header>
      
      
    </main>
  );
};

export default Main;
