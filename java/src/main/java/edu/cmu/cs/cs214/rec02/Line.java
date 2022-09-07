package edu.cmu.cs.cs214.rec02;

import edu.cmu.cs.cs214.rec02.points.*;

public class Line {
    public PolarPoint point1;
    public PolarPoint point2;

    Line(PolarPoint point1, PolarPoint point2) {
        this.point1 = point1;
        this.point2 = point2;
    }

    void draw() {
        int x1 = point1.getX();
        int y1 = point1.getY();
        int x2 = point2.getX();
        int y2 = point2.getY();
        
        // assume implementation 

        System.out.println("Line drawn from (" + x1 + ", " + y1 +
                            ") to (" + x2 + ", " + y2 + ")");
    }
}
