import {
  Mappedin,
  MapView,
  showVenue,
  TMapViewOptions,
} from "@mappedin/mappedin-js";
import { useCallback, useEffect, useRef, useState } from "react";

const UseMapView = (venue, options) => {
  // Store the MapView instance in a state variable
  const [mapView, setMapView] = useState();
  const mapRef = useRef(null);
  const isRendering = useRef(false);
  // Render the MapView asynchronously
  const renderVenue = useCallback(
    async (el, venue, options) => {
      if (isRendering.current === true || mapView != null) {
        return;
      }

      isRendering.current = true;

      const _mapView = await showVenue(el, venue, options);
      setMapView(_mapView);
      isRendering.current = false;
    },
    [isRendering, mapView, setMapView]
  );

  // Pass this ref to the target div which will render the MapView
  const elementRef = useCallback(
    (element) => {
      if (element == null) {
        return;
      }

      mapRef.current = element;

      if (mapView == null && venue != null && isRendering.current == false) {
        renderVenue(element, venue, options);
      }
    },
    [mapView, venue, renderVenue, options]
  );
  // Add all the labels to the map.
  mapView.Labels.all();

  // Setting the initial floor to Floor.id 'm_123456789'.
  mapView = show3dMap(document.getElementById("mappedin-map"), mapData, {
    initialFloor: "groundfloor",
  });

  mapView.on("click", async (event) => {
    const clickedLocation = event.coordinate;
    const destination = mapData
      .getByType("space")
      .find((s) => s.name === pindropped);

    // If the destination is found, navigate to it.
    if (destination) {
      //Ensure that directions could be generated (user clicked on a navigable space).
      const directions = mapView.getDirections(clickedLocation, destination);

      if (directions) {
        // Navigate from the clicked location to the droppedpin location.
        mapView.Navigation.draw(directions, {
          pathOptions: {
            nearRadius: 1,
            farRadius: 1,
          },
        });
      }
    }
  });

  // Get the directions between two spaces.
  const directions = mapView.getDirections(startSpace, endSpace);
  // Draw a path using the directions' coordinates array to show the route.
  path = mapView.Paths.add(directions.coordinates, {
    nearRadius: 0.5,
    farRadius: 0.5,
  });

  // Intialize the MapView if the element has been created the and venue loaded afterwards
  useEffect(() => {
    if (mapView) {
      return;
    }

    if (mapRef.current != null && venue != null) {
      renderVenue(mapRef.current, venue, options);
    }
  }, [venue, mapView, renderVenue, options]);
  return { mapView, elementRef };
};

export default UseMapView;
