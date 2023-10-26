import { useState,useEffect, useContext } from "react";
import { ACTION_TYPES ,StoreContext} from "../context/store-context";

const useTrackLocation = () => {
  const [locationErrorMsg, setLocationErrorMsg] = useState("");
  const [locationLoading, setLocationLoading] = useState(false);
  const {dispatch} = useContext(StoreContext);

  const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    dispatch({type:ACTION_TYPES.SET_LOCATION,payload:`${latitude},${longitude}`})
    setLocationErrorMsg(null);
    setLocationLoading(false);
  };

  const error = () => {
    setLocationLoading(false);
    setLocationErrorMsg("unable to retrieve your location");
  };

  const handleTrackLocation = () => {
    setLocationLoading(true);
    if (!navigator.geolocation) {
      setLocationErrorMsg("Geolocation is not supported by your browser");
      setLocationLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return [ locationErrorMsg, handleTrackLocation, locationLoading ];
};

export default useTrackLocation;
