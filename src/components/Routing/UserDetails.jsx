import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { userId } = useParams();
  return (
    <>
      <div> Dynamic User Routes { userId }</div>
    </>
  )
};

export default UserDetails;