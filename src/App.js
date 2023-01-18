/* eslint-disable*/
import React, { Suspense } from 'react';
import  { Provider } from 'react-redux'
import RegularComponent from './components/PureComponent/RegularComponent';
// import { Routes, Route } from 'react-router-dom';
// import Provider from 'redux';
// import Home from './components/Routing/Home';
// import LazyAbout from './components/Routing/About';
// import Navbar from './components/Routing/Navbar';
// import OrderSummary from './components/Routing/OrderSummary';
// import NoMatch from './components/Routing/NoMatch';
// import Products from './components/Routing/Products';
// import FeaturedProducts from './components/Routing/FeaturedProducts';
// import NewProducts from './components/Routing/NewProducts';
// import User from './components/Routing/User';
// import Admin from './components/Routing/Admin';
// import UserDetails from './components/Routing/UserDetails';
// import InfiniteScroll from './components/InfiniteScroll/InfiniteScroll';
// import ComponentA from './components/Context/ComponentA';
// import { UserProvider } from './components/Context/userContext';
// import ParentComponent from './components/useCallback/ParentComponent';
// import Counter from './components/useMemoHook/Counter';
// import LifeCycleA from './components/ClassLifecycle/LifeCycleA';
// import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
// import Counter from './components/RenderProps/Counter';
// import HoverText from './components/RenderProps/HoverText';
// import Parent from './components/ErrorBoundaries/Parent';
// import ClickCounter from './components/HOC/ClickCounter';
// import HoverCounter from './components/HOC/HoverCounter';
// import List from './components//ListAndKeys/List';
// import EventBind from './components/EventBinding/EventBind';
// import FunctionalComponent from './components/Functions/FunctionalComponent';
// import ReactDomRender from './components/MainConcepts/ReactDomRender';
// import LibraryVsFramework from './components/Questions/LibraryVsFramework';
// import PortalDemo from './components/Portal/PortalDemo';
// import ParentComponent from './components/PureComponent/ParentComponent';
// import FocusInput from './components/Refs/FocusInput';
// import FRParentInput from './components/Refs/FRParentInput';
// import RefsDemo from './components/Refs/RefsDemo';
// import { Router, Route } from 'react-router-dom';
// import Profile from './components/Routing/Profile';
// import { AuthProvider } from './components/Routing/auth';
// import Login from './components/Routing/Login';
// import RequireAuth from './components/Routing/RequireAuth';
// import CounterThree from './components/useReducerHook/CounterThree';
// import ReducerContext from './components/useReducerHook/useReducerWithUseContext/ReducerContext';
// import FetchingData from './components/useReducerHook/FetchingData';
// import Test from './components/Test';
import IceCreamComponent from './components/Redux/IceCreamComponent';
// import GrandParent from './components/ReactRender/SameElemRef/GrandParent';
// import CounterOne from './components/useReducerHook/CounterOne';
// import CounterTwo from './components/useReducerHook/CounterTwo';
import store from './components/Redux/store';
// const LazyAbout = (React.lazy(()=>import('./components/Routing/About')));
// import './App.css';

function App() {
  return (
    <Provider store={store}>
        <div className="App">
          {/* <Router> */}
              {/* <Route exact path="/" component={ParentComponent}/> */}
              {/* <Route exact path="" component={}/> */}
            {/* <ParentComponent/> */}
            {/* <ReactDomRender /> */}
          {/* </Router> */}
          {/* <RefsDemo />
          <FocusInput/>
          <FRParentInput /> */}
          {/* <PortalDemo /> */}
          {/* <Parent/> */}
          {/* <ClickCounter />
          <HoverCounter /> */}
          {/* <LibraryVsFramework /> */}
          {/* <EventBind /> */}
          {/* <List /> */}
          {/* <FunctionalComponent /> */}
          {/* <LifeCycleA /> */}
          
          {/* <Counter render={(count, clickHandler) => <ClickCounterTwo count={count} clickHandler={clickHandler}/>}/>
          <Counter render={(count, clickHandler) => <HoverText count={count} clickHandler={clickHandler}/> }/> */}

          {/* <UserProvider value= "vishwas" >
            <ComponentA />
          </UserProvider> */}
          {/* <ParentComponent /> */}
          {/* <Counter /> */}
          {/* <InfiniteScroll /> */}

          {/* <GrandParent /> */}

          {/* <CounterOne /> */}
          {/* <CounterTwo/> */}
          {/* <CounterThree/> */}
          {/* <ReducerContext /> */}
          {/* <FetchingData /> */}
          {/* <RegularComponent/> */}


          {/* <AuthProvider>
            <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='about' element={
                // <Suspense fallback='Loading...'>
                  <LazyAbout />
                // </Suspense>
              }
              />
              <Route path='order-summary' element={<OrderSummary/>} />
              <Route path='products' element={<Products/>}>
                <Route index element={<FeaturedProducts />}/>
                <Route path='featured' element={<FeaturedProducts />}/>
                <Route path='new' element={<NewProducts />}/>
              </Route>
              <Route path='user' element={<User />}>
                <Route path=':userId' element={<UserDetails />}/>
                <Route path='admin' element={<Admin />}/>
              </Route>
              <Route path='profile' element={<RequireAuth><Profile/></RequireAuth>} />
              <Route path='login' element={<Login/>} />
              <Route path='*' element={<NoMatch/>} />
            </Routes>
          </AuthProvider> */}

          {/* <Test /> */}
          <IceCreamComponent />
        </div>
    </Provider>
  );
}

export default App;
