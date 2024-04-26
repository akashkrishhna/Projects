import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import UseMapView from "../components/usemapview";
import UseVenue from "../components/usevenue";
import { useMemo } from "react";
import {
  getVenue,
  showVenue,
  PositionUpdater,
  E_BLUEDOT_EVENT,
  E_SDK_EVENT,
} from "@mappedin/mappedin-js";
import "@mappedin/mappedin-js/lib/mappedin.css";

export default function Map() {
  const options = useMemo(
    () => ({
      venue: "mappedin-demo-mall",
      clientId: "5eab30aa91b055001a68e996",
      clientSecret: "RJyRXKcryCMy4erZqqCbuB1NbR66QTGNXVE0x3Pg6oCIlUR1",
    }),
    []
  );

  const venue = UseVenue(options);
  const { elementRef, mapView } = UseMapView(venue);

  useEffect(() => {
    const positionUpdater = new PositionUpdater();
    let path;

    const currentPathOptions = {
      color: "#0000ff",
      nearRadius: 2.1,
      farRadius: 2.1,
      drawDuration: 0,
      displayArrowsOnPath: true,
    };

    async function init() {
      if (!mapView) return;

      mapView.FlatLabels.labelAllLocations();

      const cameraOrigin = venue.locations.find((l) => l.name === "Telus");
      const destination = venue.locations.find((l) => l.name === "Microsoft");

      mapView.Camera.focusOn({
        polygons: [...cameraOrigin.polygons, ...destination.polygons],
      });

      mapView.BlueDot.enable({
        positionUpdater,
        showBearing: true,
        smoothing: false,
      });

      mapView.BlueDot.on(E_BLUEDOT_EVENT.POSITION_UPDATE, ({ nearestNode }) => {
        if (!nearestNode) return;

        if (path !== undefined) {
          mapView.Paths.remove(path);
        }

        const directions = nearestNode.directionsTo(destination);
        path = mapView.Paths.add(directions.path, currentPathOptions);
      });

      mapView.on(E_SDK_EVENT.CLICK, ({ position }) => {
        positionUpdater.update({
          timestamp: Date.now(),
          coords: {
            latitude: position.latitude,
            longitude: position.longitude,
            accuracy: 3,
            floorLevel: mapView.currentMap.elevation,
          },
        });
      });
    }

    init();

    return () => {
      // Cleanup logic if necessary
    };
  }, [mapView, venue]);

  return (
    <>
      <header>
        <Navbar />
      </header>
      <body>
        <div
          className="h-1/2 max-w-[1080px] mx-auto mt-20"
          id="app"
          ref={elementRef}
        />
        ;
      </body>
    </>
  );
}
