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
