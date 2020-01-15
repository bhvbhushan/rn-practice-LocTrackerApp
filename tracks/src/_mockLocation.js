import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = increament => {
  return {
    timestamp: 1000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: 77.6192336 + increament * tenMetersWithDegrees,
      latitude: 12.934485599999999 + increament * tenMetersWithDegrees
    }
  };
};

let counter = 0;
setInterval(() => {
  Location.EventEmitter.emit('Expo.locationChanged', {
    watchId: Location._getCurrentWatchId(),
    Location: getLocation(counter)
  });
  counter++;
}, 1000);
